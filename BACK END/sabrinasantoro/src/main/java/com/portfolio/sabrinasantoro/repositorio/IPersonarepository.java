
package com.portfolio.sabrinasantoro.repositorio;

import com.portfolio.sabrinasantoro.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface IPersonarepository extends JpaRepository <Persona, Long> {
        
}
