package Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.repository;

import Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByName(String name);
    Optional<User> findByLastName(String lastName);
    Optional<User> findByUsername(String username);
    Boolean existsByName(String name);
    Boolean existsByLastName(String lastName);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
