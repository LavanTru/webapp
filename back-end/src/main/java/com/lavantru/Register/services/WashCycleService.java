package com.lavantru.Register.services;

import com.lavantru.Register.model.Temperature;
import com.lavantru.Register.model.WashCycle;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <h1>WashCycleService</h1>
 * Service that handles the business logic for laundry wash cycles
 *
 * @version 1.0
 * @since 2020
 */
@Service
public class WashCycleService implements IWashCycleService{

    @Override
    public List<WashCycle> getAllWashCycles() {
        List<WashCycle> cycles = new ArrayList<>();

        cycles.add (new WashCycle("Let your washer choose", "Let your washer choose the best cycle and temperature for your clothes."
                , getTemperature(30)));
        cycles.add (new WashCycle("Delicate / Gentle", "Ideal for garments that need extra protection. This program aims to limit the wear and tear on your clothes, plus helps to prevent shrinking and breakdown of material. It can, however, decrease the level of clean in some instances."
                ,getTemperature(30)));
        cycles.add (new WashCycle("Outdoor / Sport","For clothing designed with different types of material, like breathability and windproof or waterproof. If you’re washer doesn’t feature an outdoor program, alternative cycles include Delicate and Dark."
                ,getTemperature(30)));
        cycles.add (new WashCycle("Dark Garment / Colour","For coloured garments that might fade or bleed, such as deep reds and blues, you can select the colour cycle. It’s also a suitable option for when the Normal setting might be too harsh. It’s recommended to keep the loads separate – one for colours and one for darks."
                ,getTemperature(30)));
        cycles.add (new WashCycle("Permanent Press ","Milder version of the Cotton cycle, often with a lower temperature. This cycle is designed for fabrics that need the agitation of a Regular cycle, but the slow spin of the Delicate cycle as to not wrinkle clothes. It’s recommended primarily for wash-and-wear, synthetic fabrics, and lightly to normally soiled garments. It’s also a good option for items that wrinkle easily, such as dress shirts and pants, or if you want to preserve the finish on wrinkle-free items. An alternative cycle is Colour."
                ,getTemperature(30)));
        cycles.add (new WashCycle("Wool Cycle","Designed to protect the wool fibres from shrinkage and distortion, giving you a very gentle clean overall. Generally, the program allows a load under 2kg. It’s important that you do always check the label of your wool clothing and laundry to make sure it’s suitable for a machine wash."
                ,getTemperature(30)));
        cycles.add (new WashCycle("Fast / Quick Speed","Designed for a small amount of lightly to normal soiled garments needed quickly. Typically, this program allows a load of just 1.5kg, which is equivalent to just one pair of jeans and two shirts."
                ,getTemperature(60)));
        cycles.add (new WashCycle("Bedding / Bulky / Heavy","This program is for washing a full capacity of heavily soiled clothes, not for everyday use. Although you can also use the Normal setting for this type of load, if you’re washer is equipped with the Bulky option, opt for this cycle for increased levels of dirt removal."
                ,getTemperature(90)));
        cycles.add (new WashCycle("Normal / Regular /Cotton","The regular wash is an all-rounder, designed for soiled, dirty, sweaty and typical loads. Whether the problem is a heavy amount of sweat, heavy staining, or heavy dirt, these loads require longer wash cycles and a significant amount of agitation."
                ,getTemperature(90)));
        cycles.add (new WashCycle("Whites Cycle","Besides the obvious whites, this cycle is for bleachable white fabrics. The program can be used with or without bleach."
                ,getTemperature(90)));

        return cycles;
    }

    private Temperature getTemperature(int celsius){
        Temperature temperature = new Temperature(celsius);

        switch (celsius){
            case 30:
                temperature.setDescription("Cold");
                break;
            case 60:
                temperature.setDescription("Warm");
                break;
            case 90:
                temperature.setDescription("Hot");
                break;
            default:
                System.out.println("Invalid temperature");
        }

        return temperature;
    }
}
