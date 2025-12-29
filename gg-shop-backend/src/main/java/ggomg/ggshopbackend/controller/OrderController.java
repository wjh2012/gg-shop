package ggomg.ggshopbackend.controller;

import ggomg.ggshopbackend.dto.OrderRequest;
import ggomg.ggshopbackend.dto.OrderResponse;
import ggomg.ggshopbackend.repository.UserRepository;
import ggomg.ggshopbackend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserRepository userRepository;

    @PostMapping("/orders")
    public ResponseEntity<Long> createOrder(@AuthenticationPrincipal UserDetails userDetails,
        @RequestBody OrderRequest request) {
        Long userId = userRepository.findByEmail(userDetails.getUsername()).get().getId();
        return ResponseEntity.ok(orderService.createOrder(userId, request));
    }

    @GetMapping("/orders/my")
    public ResponseEntity<List<OrderResponse>> getMyOrders(
        @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = userRepository.findByEmail(userDetails.getUsername()).get().getId();
        return ResponseEntity.ok(orderService.getMyOrders(userId));
    }
}
