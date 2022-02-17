package com.server.smarthome.repository;

import com.server.smarthome.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> getUsersByUsername(String username);

    User findByUsername(String username);
}

