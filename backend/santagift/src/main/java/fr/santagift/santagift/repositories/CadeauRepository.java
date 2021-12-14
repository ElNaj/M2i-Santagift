package fr.santagift.santagift.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import fr.santagift.santagift.models.Cadeau;

public interface CadeauRepository extends MongoRepository<Cadeau, String>{
    
    
}
