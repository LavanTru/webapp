package com.lavantru.Register.controllers;

import com.lavantru.Register.utilities.TestHelper;
import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import com.lavantru.Register.services.IOrderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(OrderController.class)
public class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IOrderService orderService;

    final private UUID id = new UUID(1234567890, 987654321);
    final private String washeeId = "5eb7c53318b5386620497cb5";
    final private String washerId = "5eaec6a2aba8b71ff7b280c6";
    final private Item item = new Item("02a339a2-d54e-44bb-a006-43ed37dfa176", "Laundry", 2, 15);
    final private List<Item> items = Collections.singletonList(item);

    final Order order = new Order (id, "new", null, washeeId, washerId, items, null, null, 15, true);
    private String orderApiURL = "http://localhost:8080/api/order/";

    @Test
    public void createOrderTest() throws Exception {
        System.out.println(TestHelper.asJsonString(order));
        mockMvc.perform(MockMvcRequestBuilders
                .post(orderApiURL+"create")
                .content(TestHelper.asJsonString(order))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void confirmOrderTest() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .put(orderApiURL+"confirm/{id}", id))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void rejectOrderTest() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                .put(orderApiURL+"reject/{id}", id))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getAllJobsTest() throws Exception {
        List<Order> orders = Arrays.asList(order);

        given(orderService.getAllOrders()).willReturn(orders);

        mockMvc.perform(get(orderApiURL)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }


}
