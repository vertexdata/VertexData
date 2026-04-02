import React from 'react';
import { LocationPage } from '../LocationPage';
import {
  tampaBayData, tampaData, stPetersburgData, clearwaterData, largoData,
  seminoleData, treasureIslandData, pinellasParkData, dunedinData,
  palmHarborData, safetyHarborData,
} from './locationData';

export const TampaBayPage = () => <LocationPage data={tampaBayData} />;
export const TampaPage = () => <LocationPage data={tampaData} />;
export const StPetersburgPage = () => <LocationPage data={stPetersburgData} />;
export const ClearwaterPage = () => <LocationPage data={clearwaterData} />;
export const LargoPage = () => <LocationPage data={largoData} />;
export const SeminolePage = () => <LocationPage data={seminoleData} />;
export const TreasureIslandPage = () => <LocationPage data={treasureIslandData} />;
export const PinellasParkPage = () => <LocationPage data={pinellasParkData} />;
export const DunedinPage = () => <LocationPage data={dunedinData} />;
export const PalmHarborPage = () => <LocationPage data={palmHarborData} />;
export const SafetyHarborPage = () => <LocationPage data={safetyHarborData} />;
