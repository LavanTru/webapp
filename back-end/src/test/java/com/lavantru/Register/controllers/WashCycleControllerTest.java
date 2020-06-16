package com.lavantru.Register.controllers;

import com.lavantru.Register.Utilities.TestHelper;
import com.lavantru.Register.model.Washer;
import com.lavantru.Register.services.WasherService;
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
@WebMvcTest(WasherController.class)
public class WasherControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WasherService washerService;

    private Washer washer = new Washer();
    private String washerApiURL = "http://localhost:8080/api/washer/";

    @Test
    public void registerWasheeTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .post(washerApiURL+"/register")
                .content(TestHelper.asJsonString(washer))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    public void getAllWasheesTest() throws Exception {
        List<Washer> washers = Arrays.asList(washer);

        given(washerService.getAllWashers()).willReturn(washers);

        mockMvc.perform(get(washerApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

}
