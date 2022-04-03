package Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.security.services;

import Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.models.User;
import Smartlocationawareecommercesystemusingmicroservicesarchitecture.Authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("There is no user with the username: " + username));
        return UserDetailsImpl.build(user);
    }
}
