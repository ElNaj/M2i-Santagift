package fr.santagift.santagift.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.santagift.santagift.models.Cadeau;
import fr.santagift.santagift.repositories.CadeauRepository;

@Service
public class CadeauService extends CRUDService<Cadeau>{
 
    @Autowired
    CadeauRepository repository;

}
