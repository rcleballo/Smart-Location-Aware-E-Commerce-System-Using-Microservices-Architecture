package Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Role {
    @Id
    private String id;
    private EnumRole name;

    public Role() {

    }

    public Role(EnumRole name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(EnumRole name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public EnumRole getName() {
        return name;
    }
}
