# GG-SHOP Backend

GG-SHOP 프로젝트의 백엔드 서버 저장소입니다. Spring Boot를 기반으로 구축되었습니다.

## 📚 기술 스택
- **Framework**: Spring Boot 3.x
- **Language**: Java 21
- **Database**: H2 (Local), PostgreSQL (Prod)
- **Security**: Spring Security + JWT
- **Build**: Gradle

## 🚀 시작하기 (Getting Started)

### 사전 요구사항
- JDK 21 이상
- Gradle (포함된 Wrapper 사용 권장)

### 실행 방법
```bash
# 빌드
./gradlew build

# 실행
./gradlew bootRun
```

서버가 실행되면 다음 주소에서 API 명세를 확인할 수 있습니다:
- [Swagger UI](http://localhost:8080/swagger-ui/index.html)

## 🤝 개발 가이드
프로젝트 구조, 코딩 컨벤션, 브랜치 전략 등 상세한 개발 규칙은 [docs/development.md](docs/development.md) 문서를 참고해 주세요.
