export abstract class DeleteEngineService {
    public abstract loading: boolean;
    public abstract delete(id: string): void;
}
