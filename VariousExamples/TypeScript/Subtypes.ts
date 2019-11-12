interface Person {
    id: number;
    name: string;    
    lastName: string;
    load: () => Promise<Person>;
}


type FilterFlags<Base, Condition> = {
    [Key in keyof Base]:
    Base[Key] extends Condition ? Key : never
};

type AllowedNames<Base, Condition> =
FilterFlags<BaseAudioContext, Condition>[keyof Base]

type LocationMini = Subtype<LocationRaw, Location> =
Pick<LocationRaw, {
    [Key in keyof LocationRaw]:LocationRaw[Key] === Location ? Key :never

}[keyof LocationRaw]>