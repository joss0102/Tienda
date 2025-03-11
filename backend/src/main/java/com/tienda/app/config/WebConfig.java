package com.tienda.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Aplica el CORS a todas las rutas
                .allowedOrigins("http://localhost:4200")  // Aquí pones la URL de tu frontend Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE");  // Métodos HTTP permitidos
               // .allowedHeaders("Authorization", "Content-Type", "*")  // Permite todos los encabezados
              //  .allowCredentials(true);  // Permite credenciales (si es necesario)
    }
}
