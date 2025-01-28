import { create } from 'zustand';

import { KarmaCalkulatorInterface } from '../interface';

export const useKarmaCalculator = create<KarmaCalkulatorInterface>((set, get) => ({
    karmaCalculatorState: {
        vehicles: [],
        noOfVehicles: 0,
        fuelType: [],
        noOfKiloMeter: 0,
        foodType: [],
        homeAppliance: [],
        unitsOfElectricity: 0
    },

    treePlantinationForm: {
        yourName: '',
        phoneNumber: '',
        email: '',
        location: '',
        numOfPlantedTree: '',
        nameToBePlanted: ''
    },

    handleClickVehicles: (item) => {
        const currentVehicles = get().karmaCalculatorState?.vehicles;
        const isDuplicate = currentVehicles?.includes(item.id);

        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                vehicles: isDuplicate
                    ? currentVehicles.filter((id) => id !== item.id)
                    : [...currentVehicles, item.id]
            }
        }));
    },

    handleClickFuelType: (item) => {
        const currentFuel = get().karmaCalculatorState?.fuelType;
        const isDuplicate = currentFuel?.includes(item.id);

        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                fuelType: isDuplicate
                    ? currentFuel.filter((id) => id !== item.id)
                    : [...currentFuel, item.id]
            }
        }));
    },

    handleClickFootType: (item) => {
        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                foodType: [item?.id]
            }
        }));
    },

    handleClickHomeAppliance: (item) => {
        const currentList = get().karmaCalculatorState?.homeAppliance;
        const isDuplicate = currentList?.includes(item.id);

        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                homeAppliance: isDuplicate
                    ? currentList.filter((id) => id !== item.id)
                    : [...currentList, item.id]
            }
        }));
    },

    handleChangeVehiclesCount: (e, val) => {
        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                noOfVehicles: val
            }
        }));
    },

    handleChangeKilometer: (e, val) => {
        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                noOfKiloMeter: val
            }
        }));
    },

    handleChangeUnits: (e, val) => {
        set((prev) => ({
            karmaCalculatorState: {
                ...prev.karmaCalculatorState,
                unitsOfElectricity: val
            }
        }));
    },

    handleChangeForm: (key: string, value: string) => {
        set((prev) => ({
            treePlantinationForm: {
                ...prev.treePlantinationForm,
                [key]: value
            }
        }));
    }
}));