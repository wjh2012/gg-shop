package ggomg.ggshopbackend.dto;

import ggomg.ggshopbackend.domain.Item;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemResponse {

    private Long id;
    private String name;
    private Integer price;
    private Integer stock;

    public static ItemResponse of(Item item) {
        return new ItemResponse(item.getId(), item.getName(), item.getPrice(), item.getStock());
    }
}
