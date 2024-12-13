//imports specifically model, and datatypes from the sequelize library
import { Model, DataTypes} from sequelize;

export class User extends Model {
    static init(sequelize) {
      return super.init({
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        balance: {
          type: DataTypes.DECIMAL(10, 2),
          defaultValue: 0.00
        }
      }, {
        sequelize,
        modelName: 'User'
      });
    }
  
    static associate(models) {
      this.hasMany(models.Transaction, { foreignKey: 'userId' });
    }
}