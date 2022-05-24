
package com.portfolio.sabrinasantoro.service;

import com.portfolio.sabrinasantoro.Interface.IPersonaService;
import com.portfolio.sabrinasantoro.Entity.Persona;
import com.portfolio.sabrinasantoro.repositorio.IPersonarepository;
import java.util.List;
import org.springframework.stereotype.Service;



@Service

public class ImpPersonaService implements IPersonaService {


public IPersonarepository IPersonaRepository;
   
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = IPersonaRepository.findAll();
    return persona; 


    }

    @Override
    public void savePersona(Persona persona) {
    IPersonaRepository.save(persona);
   }
    

    @Override
    public void deletePersona(Long id) {
    IPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
    return IPersonaRepository.findById(id).orElse(null);
   
    }
}

    
   
