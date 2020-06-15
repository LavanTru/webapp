package com.lavantru.Register.services;

import com.lavantru.Register.model.WashCycle;

import java.util.List;

/**
 * <h1>IWashCycleService</h1>
 * Interface that defines WashCycleService behavior
 *
 * @version 1.0
 * @since 2020
 */
public interface IWashCycleService {

    List<WashCycle> getAllWashCycles();
}
