import { FormField } from "@/components/FormField"
import { Select } from "@/components/Select"

export const categoryList = ["Restaurant", "Museum", "Bar", "Parc"]
export const cuisineList = ["French", "Japanese", "Italian"]
export const starsNumberList = ["0", "1", "2", "3"]
export const medianPricesList = ["1", "2", "3", "4", "5"]
export const artisticCurrentList = ["Modern", "Impressionism", "Romantic"]
export const priceOrderList = ["Free", "1", "2", "3", "4", "5"]
export const parcTypesList = ["Parc floral", "Parc forestier"]
export const isPublicList = ["Public", "Private"]
export const categoryFormFields = {
  Restaurant: [
    <Select key="cuisineType" name="cuisineType" optionsList={cuisineList} />,
    <Select key="starNumber" name="starNumber" optionsList={starsNumberList} />,
    <Select
      key="medianPrice"
      name="medianPrice"
      optionsList={medianPricesList}
    />,
  ],
  Museum: [
    <Select
      key="artisticCurrent"
      name="artisticCurrent"
      optionsList={artisticCurrentList}
    />,
    <FormField
      key="artType"
      name="artType"
      placeholder="Enter the type of art"
    />,
    <Select
      key="museumPriceOrder"
      name="museumPriceOrder"
      optionsList={priceOrderList}
    />,
    <FormField
      key="museumPrice"
      name="museumPrice"
      placeholder="Enter the price"
    />,
  ],
  Bar: [
    <FormField
      key="barType"
      name="barType"
      placeholder="Enter the type of bar"
    />,
    <Select
      key="barPriceOrder"
      name="barPriceOrder"
      optionsList={priceOrderList}
    />,
  ],
  Parc: [
    <Select key="parcType" name="parcType" optionsList={parcTypesList} />,
    <Select key="isPublic" name="isPublic" optionsList={[true, false]} />,
    <Select
      key="ParcPriceOrder"
      name="ParcPriceOrder"
      optionsList={priceOrderList}
    />,
    <FormField
      key="parcPrice"
      name="parcPrice"
      placeholder="Enter the price"
    />,
  ],
}
export const categoryFilterFields = {
  Restaurant: [
    <Select
      key="cuisineType"
      name="cuisineType"
      optionsList={["No Filter", ...cuisineList]}
    />,
    <Select
      key="starNumber"
      name="starNumber"
      optionsList={["No Filter", ...starsNumberList]}
    />,
    <Select
      key="medianPrice"
      name="medianPrice"
      optionsList={["No Filter", ...medianPricesList]}
    />,
  ],
  Museum: [
    <Select
      key="artisticCurrent"
      name="artisticCurrent"
      optionsList={["No Filter", ...artisticCurrentList]}
    />,
    <FormField
      key="artType"
      name="artType"
      placeholder="Enter the type of art"
    />,
    <Select
      key="priceOrder"
      name="priceOrder"
      optionsList={["No Filter", ...priceOrderList]}
    />,
  ],
  Bar: [
    <FormField
      key="barType"
      name="barType"
      placeholder="Enter the type of bar"
    />,
    <Select
      key="priceOrder"
      name="priceOrder"
      optionsList={["No Filter", ...priceOrderList]}
    />,
  ],
  Parc: [
    <Select
      key="parcType"
      name="parcType"
      optionsList={["No Filter", ...parcTypesList]}
    />,
    <Select
      key="isPublic"
      name="isPublic"
      optionsList={["No Filter", ...isPublicList]}
    />,
    <Select
      key="priceOrder"
      name="priceOrder"
      optionsList={["No Filter", ...priceOrderList]}
    />,
  ],
}
