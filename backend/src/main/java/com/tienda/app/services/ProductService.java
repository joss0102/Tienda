package com.tienda.app.services;

import com.tienda.app.dtos.auth.ProductRequest;
import com.tienda.app.models.Product;
import com.tienda.app.models.User;
import com.tienda.app.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(ProductRequest request, User seller) {
        Product product = new Product();
        product.setTitle(request.getTitle());
        product.setAuthor(request.getAuthor());
        product.setPrice(request.getPrice());
        product.setTax(request.getTax());
        product.setCurrency(request.getCurrency());
        product.setGenre1(request.getGenre1());
        product.setGenre2(request.getGenre2());
        product.setDescription(request.getDescription());
        product.setPopularity(request.getPopularity());
        product.setSeller(seller);

        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
