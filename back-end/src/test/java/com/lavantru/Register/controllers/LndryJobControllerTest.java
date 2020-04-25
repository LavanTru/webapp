package com.lavantru.Register.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lavantru.Register.controllers.LndryJobController;
import com.lavantru.Register.model.LndryJob;
import com.lavantru.Register.services.LndryJobService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@RunWith(SpringRunner.class)
@WebMvcTest(LndryJobController.class)
public class LndryJobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LndryJobService lndryJobService;

    private UUID id = new UUID(1234567890, 987654321);
    private String jobMocked = "Laundry";
    private LndryJob lndryJob = new LndryJob(id, jobMocked);
    private String lndryJobApiURL = "http://localhost:8080/api/laundryJob/";

    @Test
    public void getAllLndryJobsTest() throws Exception {
        List<LndryJob> allLndryJobs = Arrays.asList(lndryJob);

        given(lndryJobService.getAllJobs()).willReturn(allLndryJobs);

        mockMvc.perform(get(lndryJobApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    @Test
    public void getLndryJobByIdTest() throws Exception
    {
        Optional<LndryJob> lndryJob = Optional.of(this.lndryJob);

        given(lndryJobService.getJobById(id)).willReturn(lndryJob);

        mockMvc.perform(MockMvcRequestBuilders
                .get(lndryJobApiURL+"{id}", id)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.job").value(jobMocked));
    }

    @Test
    public void addLndryJobTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .post(lndryJobApiURL)
                .content(asJsonString(lndryJob))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void updateLndryJobByIdTest() throws Exception
    {
        MockHttpServletRequestBuilder builder =
                MockMvcRequestBuilders.put(lndryJobApiURL + "{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content((asJsonString(lndryJob)));

        mockMvc.perform(builder)
                .andExpect(status().isOk());
    }

    @Test
    public void deleteLndryJobByIdTest() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders
                .delete(lndryJobApiURL+"{id}", id))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}