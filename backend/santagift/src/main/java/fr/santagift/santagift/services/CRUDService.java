package fr.santagift.santagift.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Cette classe est un service générique
 */
public class CRUDService<T> {
    
    @Autowired
	MongoRepository<T, String> repository;

    public <S extends T> List<S> saveAll(Iterable<S> iterable){
		return repository.saveAll(iterable);
	}
	  public List<T> findAll() {
	        return repository.findAll();
	    }

	    public List<T> findAll(Sort sort) {
	        return repository.findAll(sort);
	    }

	    public <S extends T> S insert(S s) {
	        return repository.insert(s);
	    }

	    public <S extends T> List<S> insert(Iterable<S> iterable) {
	        return repository.insert(iterable);
	    }

	    public <S extends T> List<S> findAll(Example<S> example) {
	        return repository.findAll(example);
	    }

	    public <S extends T> List<S> findAll(Example<S> example, Sort sort) {
	        return repository.findAll(example, sort);
	    }

	    public Page<T> findAll(Pageable pageable) {
	        return repository.findAll(pageable);
	    }

	    public <S extends T> S save(S s) {
	        return repository.save(s);
	    }

	    public Optional<T> findById(String s) {
	        return repository.findById(s);
	    }

	    public boolean existsById(String s) {
	        return repository.existsById(s);
	    }

	    public Iterable<T> findAllById(Iterable<String> iterable) {
	        return repository.findAllById(iterable);
	    }

	    public long count() {
	        return repository.count();
	    }

	    public void deleteById(String s) {
	        repository.deleteById(s);
	    }

	    public void delete(T t) {
	        repository.delete(t);
	    }

	    public void deleteAllById(Iterable<? extends String> iterable) {
	        repository.deleteAllById(iterable);
	    }

	    public void deleteAll(Iterable<? extends T> iterable) {
	        repository.deleteAll(iterable);
	    }

	    public void deleteAll() {
	        repository.deleteAll();
	    }

	    public <S extends T> Optional<S> findOne(Example<S> example) {
	        return repository.findOne(example);
	    }
	    
	    public <S extends T> long count(Example<S> example) {
	        return repository.count(example);
	    }

	    public <S extends T> boolean exists(Example<S> example) {
	        return repository.exists(example);
	    }
}
