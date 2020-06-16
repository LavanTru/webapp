package com.lavantru.Register.controllers;

import com.lavantru.Register.utilities.TestHelper;
import com.lavantru.Register.model.Washee;
import com.lavantru.Register.services.WasheeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(WasheeController.class)
public class WasheeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WasheeService washeeService;

    private Washee washee = new Washee();
    private String washeeApiURL = "http://localhost:8080/api/washee/";

    @Test
    public void registerWasheeTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .post(washeeApiURL+"/register")
                .content(TestHelper.asJsonString(washee))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void getAllWasheesTest() throws Exception {
        List<Washee> washees = Arrays.asList(washee);

        given(washeeService.getAllWashees()).willReturn(washees);

        mockMvc.perform(get(washeeApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

}
