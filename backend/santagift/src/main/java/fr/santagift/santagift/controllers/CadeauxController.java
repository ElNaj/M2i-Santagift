package fr.santagift.santagift.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.santagift.santagift.models.Cadeau;
import fr.santagift.santagift.services.CadeauService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping()
public class CadeauxController {

    @Autowired
    CadeauService service;

    /**
     * Route GET retournant l'ensemble des cadeaux
     * @return Liste de Cadeaux
     * @author Najim
     */
    @GetMapping("/cadeaux")
    public List<Cadeau> findAll() {
        return this.service.findAll();
    }

    /**
     * Route POST ajoutant un cadeau/ enregistrer le cadeau dans la bdd.
     * @param cadeau 
     * Prend un objet Cadeau en paramètre
     * @return Cadeau enregistré
     * @author Najim
     */
    @PostMapping("/cadeaux")
    public Cadeau create(@RequestBody Cadeau cadeau) {
        return this.service.save(cadeau);
    }

    @DeleteMapping("/cadeaux/{id}")
    public void deleteById(@PathVariable("id") String id) {
        this.service.deleteById(id);
    }
    
}