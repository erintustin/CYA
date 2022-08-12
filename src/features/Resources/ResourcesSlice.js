import { RESOURCES } from '../../app/assets/Resources/RESOURCES';
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    resourcesArray: RESOURCES
};

const resourcesSlice = createSlice({
    name: 'resources',
    initialState
});

export const resourcesReducer = resourcesSlice.reducer;

export const selectAllResources = (state) => {
    return state.resources.resourcesArray;
};

export const selectResourceById = (id) => (state) => {
    return state.resources.resourcesArray.find((resource) => resource.id === parseInt(id));

};

export const selectFeaturedResources = (state) => {
    return state.resources.resourcesArray.filter(
        (resource) => resource.featured
    );
};

export const selectResourcesByType = (type) => (state) => {
    return state.resources.resourcesArray.filter((resource) => resource.type === type);

};