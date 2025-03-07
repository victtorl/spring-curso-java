package io.cursojava.curso.dao;

import io.cursojava.curso.models.Usuario;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp  implements UsuarioDao{

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        String query="FROM Usuario";
        List<Usuario> resultado= entityManager.createQuery(query).getResultList();
        return  resultado;
    }

    @Override
    public void eliminar(Long id) {
    Usuario usuario=entityManager.find(Usuario.class,id);
    entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario usuario) {
    entityManager.merge(usuario);
    }

}
