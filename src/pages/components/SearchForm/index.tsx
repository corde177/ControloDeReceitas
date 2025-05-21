import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { SearchFormContainer } from "./style";

export function SerarchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transições" />
      <button type="submit">
        <MagnifyingGlassIcon size={32} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
