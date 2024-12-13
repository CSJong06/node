// models/Transaction.js
import { Model, DataTypes } from 'sequelize';

export class Transaction extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      type: {
        type: DataTypes.ENUM('deposit', 'withdrawal', 'transfer'),
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0.01
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed', 'failed'),
        defaultValue: 'pending'
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,
      modelName: 'Transaction'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
  }
}