export type TipoSenal = 'sonora' | 'química' | 'eléctrica' | 'visual' | 'mixta';
export type NivelConsenso = 'establecido' | 'en debate' | 'especulativo';
export type CategoriaCaso = 'animales' | 'plantas' | 'hongos';
export type AreaAplicacion = 'conservación' | 'agricultura' | 'gestión forestal';

export interface Fuente {
  id: string;
  autores: string;
  año: number;
  titulo: string;
  revista: string;
  doi?: string;
  url?: string;
  requiereVerificacion?: boolean;
}

export interface Caso {
  id: string;
  nombre: string;
  nombreCientifico: string;
  categoria: CategoriaCaso;
  tipoSenal: TipoSenal[];
  funcionComunicativa: string;
  evidenciaPrincipal: string;
  nivelConsenso: NivelConsenso;
  descripcionDetallada: string;
  ejemplosConcretos: string[];
  fuentesIds: string[];
  imagen?: string;
  imageAlt?: string;
}

export interface AplicacionPractica {
  id: string;
  titulo: string;
  area: AreaAplicacion;
  descripcion: string;
  ejemplos: string[];
  fuentesIds: string[];
}

export interface DataSet {
  casos: Caso[];
  fuentes: Fuente[];
  aplicaciones: AplicacionPractica[];
  metadatos: {
    version: string;
    ultimaActualizacion: string;
    notaMetodologica: string;
  };
}
