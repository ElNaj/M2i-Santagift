package fr.santagift.santagift.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document(collection = "cadeaux")
@Getter
@Setter
public class Cadeau {
    @Id
    private String id;
    private String nom;
    private String img;
    private String siteMarchand;
    
}
