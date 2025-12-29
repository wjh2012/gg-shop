package ggomg.ggshopbackend.service;

import ggomg.ggshopbackend.domain.Item;
import ggomg.ggshopbackend.dto.ItemRequest;
import ggomg.ggshopbackend.dto.ItemResponse;
import ggomg.ggshopbackend.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemService {

    private final ItemRepository itemRepository;

    public List<ItemResponse> getAllItems() {
        return itemRepository.findAll().stream()
            .map(ItemResponse::of)
            .collect(Collectors.toList());
    }

    public ItemResponse getItem(Long id) {
        Item item = itemRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Item not found"));
        return ItemResponse.of(item);
    }

    @Transactional
    public Long createItem(ItemRequest request) {
        Item item = new Item(request.getName(), request.getPrice(), request.getStock());
        return itemRepository.save(item).getId();
    }

    @Transactional
    public void updateItem(Long id, ItemRequest request) {
        Item item = itemRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Item not found"));
        item.update(request.getName(), request.getPrice(), request.getStock());
    }

    @Transactional
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
