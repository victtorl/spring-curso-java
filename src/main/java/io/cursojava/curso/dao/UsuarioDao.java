package io.cursojava.curso.dao;

import io.cursojava.curso.models.Usuario;

import java.math.BigInteger;
import java.util.List;

public interface UsuarioDao {
   public List<Usuario> getUsuarios();


   void eliminar(Long id);

   void registrar(Usuario usuario);
}
