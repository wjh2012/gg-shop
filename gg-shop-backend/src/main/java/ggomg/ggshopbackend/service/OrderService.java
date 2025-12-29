package ggomg.ggshopbackend.service;

import ggomg.ggshopbackend.domain.*;
import ggomg.ggshopbackend.dto.OrderRequest;
import ggomg.ggshopbackend.dto.OrderResponse;
import ggomg.ggshopbackend.repository.OrderRepository;
import ggomg.ggshopbackend.repository.ItemRepository;
import ggomg.ggshopbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    @Transactional
    public Long createOrder(Long userId, OrderRequest request) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        Item item = itemRepository.findById(request.getItemId())
            .orElseThrow(() -> new RuntimeException("Item not found"));

        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice(),
            request.getQuantity());

        Order order = Order.createOrder(user, orderItem);

        return orderRepository.save(order).getId();
    }

    public List<OrderResponse> getMyOrders(Long userId) {
        return orderRepository.findByUserId(userId).stream()
            .map(OrderResponse::of)
            .collect(Collectors.toList());
    }

}
