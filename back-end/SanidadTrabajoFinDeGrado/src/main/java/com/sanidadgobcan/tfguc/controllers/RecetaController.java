/*
 * package com.sanidadgobcan.tfguc.controllers;
 * 
 * import java.util.ArrayList; import java.util.Optional;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.web.bind.annotation.CrossOrigin; import
 * org.springframework.web.bind.annotation.GetMapping; import
 * org.springframework.web.bind.annotation.PathVariable; import
 * org.springframework.web.bind.annotation.PostMapping; import
 * org.springframework.web.bind.annotation.RequestBody; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RestController;
 * 
 * import com.sanidadgobcan.tfguc.models.RecetaModel; import
 * com.sanidadgobcan.tfguc.repositories.RecetaRepository;
 * 
 * @CrossOrigin(origins = "*", maxAge = 3600)
 * 
 * @RestController
 * 
 * @RequestMapping("/receta") public class RecetaController {
 * 
 * @Autowired RecetaRepository recetaRepository;;
 * 
 * @GetMapping("/listar") public ArrayList<RecetaModel> obtenerReceta(){ return
 * (ArrayList<RecetaModel>) recetaRepository.findAll(); }
 * 
 * @GetMapping("/buscar/{id}") public Optional<RecetaModel>
 * buscaRecetaPorID(@PathVariable("id") Long id) { return
 * recetaRepository.findById(id); }
 * 
 * @PostMapping("/crear") public RecetaModel registraReceta(@RequestBody
 * RecetaModel receta) { return recetaRepository.save(receta); } }
 */