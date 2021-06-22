import dbConn from "../config";

const qs_device_brife =
  "select top 40 d.deviceid, i.iconid from device d left join deviceprofile p on d.devicetype=p.devicetype left join icon i on p.iconid = i.iconid";

const qs_icon = " select top 40 icondata from icon where iconid=";

const list = (req, res) => {
  dbConn.then((pool) => {
    pool.request().query(qs_device_brife, (err, records) => {
      if (err) console.log(err);
      else
        return res.json({
          data: records.recordset,
        });
    });
  });
};

const icon = (req, res) => {
  dbConn.then((pool) => {
    pool.request().query(qs_icon + req.query.iconid, (err, record) => {
      console.log(record);
      res.set({ "Content-Type": "image/x-icon" });
      return res.send(record.recordset[0].icondata);
    });
  });
};

export default { list, icon };
