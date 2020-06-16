package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Temperature;
import com.lavantru.Register.model.WashCycle;
import com.lavantru.Register.services.WashCycleService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(WashCycleController.class)
public class WashCycleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WashCycleService washCycleService;

    private Temperature temperature = new Temperature(30);
    private WashCycle washCycle = new WashCycle("Delicates", "Delicate clothes", temperature);
    private String washCycleApiURL = "http://localhost:8080/api/washcycle/";


    @Test
    public void getWashCyclesTest() throws Exception {
        List<WashCycle> washCycles = Arrays.asList(washCycle);

        given(washCycleService.getAllWashCycles()).willReturn(washCycles);

        mockMvc.perform(get(washCycleApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].cycle").isNotEmpty());
    }

}
