/**
 * profile 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const profileModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "profile",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = profileModel;
