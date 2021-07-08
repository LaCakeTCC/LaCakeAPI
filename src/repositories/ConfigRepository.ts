import { EntityRepository, Repository } from "typeorm";
import { Config } from "../entities/Config";

@EntityRepository(Config)
class ConfigRepository extends Repository<Config>{
}

export {ConfigRepository}