package fr.santagift.santagift.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.santagift.santagift.models.Cadeau;
import fr.santagift.santagift.repositories.CadeauRepository;

/**
 * Cette classe est le service pour le cadeau et hérite du service générique
 */
@Service
public class CadeauService extends CRUDService<Cadeau>{
 
    @Autowired
    CadeauRepository repository;

}
