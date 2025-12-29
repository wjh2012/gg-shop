# 개발 가이드 (Development Guide)

이 문서는 `gg-shop-backend` 프로젝트의 개발 환경 설정, 아키텍처 구조, 코딩 컨벤션 및 배포 전략을 다룹니다.

## 1. 개발 환경 설정 (Environment Setup)

### 1.1 필수 요구 사항
- **JDK**: Java 21 이상
- **Build Tool**: Gradle (Wrapper 사용 권장 `./gradlew`)
- **Database**:
    - Local/Test: H2 Database
    - Production: PostgreSQL

### 1.2 프로젝트 실행
```bash
# Repository 클론
git clone <repository-url>

# 의존성 설치 및 빌드
./gradlew build

# 애플리케이션 실행
./gradlew bootRun
```

---

## 2. 프로젝트 구조 (Project Structure)

프로젝트는 계층형 아키텍처(Layered Architecture)를 기반으로 구성되어 있습니다.

```text
src/main/java/ggomg/ggshopbackend/
├── config/         # 설정 클래스 (Security, Swagger 등)
├── controller/     # 웹 계층 (API 엔드포인트)
├── domain/         # 도메인 계층 (Entity, 비즈니스 로직) - Setter 사용 금지
├── dto/            # 데이터 전송 객체 (Request/Response)
├── repository/     # 데이터 접근 계층 (JPA Repository)
├── security/       # 보안 관련 (JWT, UserDetails)
└── service/        # 서비스 계층 (트랜잭션 관리, 도메인 호출)
```

---

## 3. 개발 규칙 (Development Rules)

### 3.1 기본 원칙
- **가독성 우선**: 코드는 이해하기 쉬워야 합니다.
- **명시적 로직**: 암묵적인 로직보다는 명시적인 구현을 선호합니다.

### 3.2 브랜치 전략
- **main**: 배포 가능한 안정 버전
- **develop**: 다음 릴리즈를 위한 통합 브랜치
- **feature/**: 새로운 기능 개발 (예: `feature/login-auth`)

### 3.3 도메인(Entity) 규칙
데이터 무결성과 객체지향적 설계를 위해 다음 규칙을 엄수합니다.

#### 3.3.1 Lombok @Setter 사용 금지
Entity 클래스에는 절대로 `@Setter`를 사용하지 않습니다. 데이터 변경의 의도를 명확히 하기 위함입니다.

❌ **Bad**:
```java
@Entity
@Setter // 금지
public class Order {
    private OrderStatus status;
}
```

#### 3.3.2 의미 있는 비즈니스 메서드 사용
상태 변경은 반드시 비즈니스 의미를 담은 메서드를 통해 수행합니다.

✅ **Good**:
```java
@Entity
public class Item {
    // ...
    public void update(String name, Integer price, Integer stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
```

#### 3.3.3 생성자 및 팩토리 메서드
- JPA 스펙을 위한 기본 생성자는 `protected`로 제한합니다.
- 객체 생성은 생성자 또는 정적 팩토리 메서드를 사용합니다.
- `@Builder`는 Entity에 사용하지 않습니다 (생성자/팩토리 메서드 권장).

### 3.4 DTO 규칙
- DTO(Request/Response) 객체는 데이터 전달이 목적이므로 `@Getter`, `@Setter`, `@Builder` 등을 허용합니다.
- `record` 타입을 적극 활용하는 것을 권장합니다 (Java 16+).

### 3.5 API 네이밍 규칙
- **URI**: 소문자와 하이픈(`-`) 사용, 복수형 명사 사용 (예: `/api/items`, `/api/users`)
- **JSON Field**: 카멜 케이스(camelCase)

---

## 4. API 문서화 (API Documentation)
이 프로젝트는 **Swagger UI (SpringDoc)** 를 사용하여 API 명세를 관리합니다.
- 로컬 실행 시 접속 주소: `http://localhost:8080/swagger-ui/index.html`

---

## 5. 테스트 (Testing)
- **Unit Test**: 비즈니스 로직 검증 (JUnit 5, Mockito)
- **Integration Test**: `@SpringBootTest`를 활용한 통합 검증

```bash
# 전체 테스트 실행
./gradlew test
```

---

## 6. 보안 (Security)
- **Authentication**: JWT (JSON Web Token) 기반 인증
- **Authorization**: Role 기반 접근 제어 (`Role.USER`, `Role.ADMIN`)
- `SecurityConfig`에서 엔드포인트별 권한을 설정합니다.