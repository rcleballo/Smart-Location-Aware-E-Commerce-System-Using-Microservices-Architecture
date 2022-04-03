package Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.repository;

import Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.models.EnumRole;
import Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(EnumRole name);
}
