package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entites.Product;

public interface ProductRepository  extends JpaRepository<Product, Long>{
		
	List<Product> findAllByOrderByNameAsc();
}
	