
package com.portfolio.sabrinasantoro.Controller;

import com.portfolio.sabrinasantoro.Entity.Persona;
import com.portfolio.sabrinasantoro.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class PersonaController {
 
@Autowired 
        IPersonaService IPersonaService ;

@GetMapping ("personas/traer")
public List <Persona> getPersona () {
    return IPersonaService.getPersona();
}
    
@PostMapping("/personas/crear")
public String createPersona (@RequestBody Persona persona){
    IPersonaService.savePersona (persona);
    return "La persona fue creada correctamente";
    }

 @DeleteMapping ("/delete/{id}")
 public void deletePersona (@PathVariable Long id){
 IPersonaService.deletePersona(id);
 } 
   
 @PutMapping ("/personas/borrar/{id}")
 public Persona editPersona (@PathVariable Long id,
         @RequestParam ("nombre") String nuevoNombre,
         @RequestParam ("Apellido")String nuevoApellido,
         @RequestParam ("Img")String nuevaImg,
         @RequestParam ("company")String nuevaCompany
         ){
         
   Persona persona =   IPersonaService.findPersona (id);
 persona.setNombre (nuevoNombre);
 persona.setApellido (nuevoApellido);
 persona.setImg (nuevaImg);
 persona.setCompany (nuevaCompany);
 
 IPersonaService.savePersona (persona);
 return persona;
}}

