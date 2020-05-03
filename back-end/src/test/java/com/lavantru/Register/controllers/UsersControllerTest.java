package com.lavantru.Register.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;

import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.model.Address;
import com.lavantru.Register.model.PaymentMethod;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.repositories.UsersRepository;
import com.lavantru.Register.services.IUsersService;
import com.lavantru.Register.services.UsersService;
import java.text.ParseException;
import org.springframework.http.MediaType;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@RunWith(SpringRunner.class)
@WebMvcTest(UsersController.class)
class UsersControllerTest {

  @Autowired
  private MockMvc mvc;
  @Autowired
  private UsersController usersController;
  @MockBean
  private IUsersService service;
  @MockBean
  private UsersRepository repository;

  Address testAddress = new Address("Carrer dels Almogàvers", "119", null, "08018", "Barcelona",
      true);
  List<Address> testAddressList = Arrays.asList(testAddress);
  PaymentMethod testPaymentMethod;

  {
    try {
      testPaymentMethod = new PaymentMethod("5500000000000004",
          new SimpleDateFormat("yyyy-mm-dd").parse("2025-12-30"), "456", true);
    } catch (ParseException e) {
      e.printStackTrace();
    }
  }

  List<PaymentMethod> testPaymentMethodList = Arrays.asList(testPaymentMethod);
  Users testUser = new Users("5e763c3ea65eaf400c234e7a", "Dave", "Dev", "davedev@gmail.com",
      "222222222", "BUSINESS", "Prodevelopment LTD", "WASHEE", false, null,"hello world!","image");
  List<Users> testUserList = Arrays.asList(testUser);
  UsersDto testUserDto = new UsersDto("Dave", "Dev", "davedev@gmail.com","Password123","WASHEE","Password123");

  @Test
  public void whenUserControllerInjected_thenNotNull() throws Exception {
    assertThat(usersController).isNotNull();
  }

  @Test
  void getAllUsers() throws Exception {

    given(usersController.getAllUsers()).willReturn(testUserList);

    mvc.perform(MockMvcRequestBuilders.get("/api/users/")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(1)))
        .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].firstName", is(testUser.getFirstName())));
  }

//  @Test
//  void getUserById() {
//  }

//  TODO: add test to check invalid user and non matching password
  @Test
  void loginWithValidUserReturnsCorrectResponse() throws Exception {

    given(service.passwordMatches(testUserDto.getEmail(),testUserDto.getPassword())).willReturn(true);
    given(service.emailExists(testUserDto.getEmail())).willReturn(true);

    String userJson = "{\"email\": \"davedev@gmail.com\", \"password\": \"Password123\"}";
    mvc.perform(MockMvcRequestBuilders.post("/api/users/login")
        .content(userJson)
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.status().isOk());
  }

//  @Test
//  void getUserByEmail() {
//  }
//
//  @Test
//  void modifyUserById() {
//  }

  @Test
  void createUser() throws Exception{
    String userJson = "{\"email\": \"davedev@gmail.com\", \"password\": \"Password123\"}";
    mvc.perform(MockMvcRequestBuilders.post("/api/users/login")
        .content(userJson)
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.status().isOk());
  }

//  @Test
//  void deleteUser() {
//  }
}