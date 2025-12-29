package ggomg.ggshopbackend.repository;

import ggomg.ggshopbackend.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
