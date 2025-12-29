package ggomg.ggshopbackend.controller;

import ggomg.ggshopbackend.dto.ItemRequest;
import ggomg.ggshopbackend.dto.ItemResponse;
import ggomg.ggshopbackend.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/items")
    public ResponseEntity<List<ItemResponse>> getItems() {
        return ResponseEntity.ok(itemService.getAllItems());
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ItemResponse> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.getItem(id));
    }

    @PostMapping("/admin/items")
    public ResponseEntity<Long> createItem(@RequestBody ItemRequest request) {
        return ResponseEntity.ok(itemService.createItem(request));
    }

    @PutMapping("/admin/items/{id}")
    public ResponseEntity<Void> updateItem(@PathVariable Long id,
        @RequestBody ItemRequest request) {
        itemService.updateItem(id, request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/admin/items/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return ResponseEntity.ok().build();
    }
}
