package ggomg.ggshopbackend.dto;

import ggomg.ggshopbackend.domain.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {

    private Long id;
    private LocalDateTime orderDate;
    private String status;
    private int totalPrice;

    public static OrderResponse of(Order order) {
        return new OrderResponse(order.getId(), order.getOrderDate(), order.getStatus().name(),
            order.getTotalPrice());
    }
}
