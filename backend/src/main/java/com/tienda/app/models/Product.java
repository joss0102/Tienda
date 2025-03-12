package com.tienda.app.models;

import com.tienda.app.enums.Currency;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    private LocalDateTime createdAt = LocalDateTime.now();

    private Currency currency;


    private String genre1;
    private String genre2;

    @Lob
    private String description;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private Double tax;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private Integer popularity;

    // Métodos setter
    public void setPopularity(Integer popularity) {
        this.popularity = popularity;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSeller(User seller) {
        this.seller = seller;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setTax(Double tax) {
        this.tax = tax;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public void setGenre1(String genre1) {
        this.genre1 = genre1;
    }
    public void setGenre2(String genre2) {
        this.genre2 = genre2;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
