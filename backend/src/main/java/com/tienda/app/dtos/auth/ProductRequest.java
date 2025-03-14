package com.tienda.app.dtos.auth;

import com.tienda.app.enums.Currency;
import lombok.Getter;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

@Getter
public class ProductRequest {
    // Getters y Setters
    private String title;
    private String author;
    private BigDecimal price;
    private Double tax;
    private Currency currency;
    private String genre1;
    private String genre2;
    private String description;
    private Integer popularity;
    @NotNull
    private Long sellerId; // ID del vendedor

    public void setTitle(String title) { this.title = title; }

    public void setAuthor(String author) { this.author = author; }

    public void setPrice(BigDecimal price) { this.price = price; }

    public void setTax(Double tax) { this.tax = tax; }

    public void setCurrency(Currency currency) { this.currency = currency; }

    public void setGenre1(String genre1) { this.genre1 = genre1; }

    public void setGenre2(String genre2) { this.genre2 = genre2; }

    public void setDescription(String description) { this.description = description; }

    public void setPopularity(Integer popularity) { this.popularity = popularity; }

    public void setSellerId(Long sellerId) { this.sellerId = sellerId; }
}
