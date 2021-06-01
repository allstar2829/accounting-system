<template>
  <form role="form">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label class="text-danger">*請款選項</label>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="paymentOptions"
                id="paymentOptions_fullAmount"
                value="fullAmount"
                v-model="paymentOptions"
              />
              <label class="form-check-label" for="paymentOptions_fullAmount"
                >全額</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="paymentOptions"
                id="paymentOptions_deposit"
                value="deposit"
                v-model="paymentOptions"
              />
              <label class="form-check-label" for="paymentOptions_deposit"
                >訂金</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="paymentOptions"
                id="paymentOptions_finalPayment"
                value="finalPayment"
                v-model="paymentOptions"
              />
              <label class="form-check-label" for="paymentOptions_finalPayment"
                >尾款</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label class="text-danger">*請款類型</label>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="typeOfPayment"
                id="typeOfPayment_reimbursement"
                value="reimbursement"
                v-model="typeOfPayment"
              />
              <label class="form-check-label" for="typeOfPayment_reimbursement"
                >員工代墊</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="typeOfPayment"
                id="typeOfPayment_salary"
                value="salary"
                v-model="typeOfPayment"
              />
              <label class="form-check-label" for="typeOfPayment_salary"
                >薪資</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="typeOfPayment"
                id="typeOfPayment_allowance"
                value="allowance"
                v-model="typeOfPayment"
              />
              <label class="form-check-label" for="typeOfPayment_allowance"
                >軟體補助</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="typeOfPayment"
                id="typeOfPayment_vendorPayment"
                value="vendorPayment"
                v-model="typeOfPayment"
              />
              <label class="form-check-label" for="typeOfPayment_vendorPayment"
                >廠商款</label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 公司款選擇匯款/公司卡 -->
      <div class="col">
        <div class="wayForPayment" v-if="typeOfPayment === 'vendorPayment'">
          <div class="form-group">
            <label class="text-danger">*款項給付方式</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="wayToPay"
                  id="wayToPay_remittance"
                  value="remittance"
                  v-model="wayToPay"
                />
                <label class="form-check-label" for="wayToPay_remittance"
                  >匯款</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="wayToPay"
                  id="wayToPay_companyCard"
                  value="companyCard"
                  v-model="wayToPay"
                />
                <label class="form-check-label" for="wayToPay_companyCard"
                  >公司卡</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 補助/付款期限 顯示區 -->
      <div class="col">
        <div class="proportion" v-if="typeOfPayment === 'allowance'">
        <!-- <div class="proportion"> -->
          <div class="form-group">
            <label class="text-danger">*補助比例</label>
            <select class="form-control">
              <option selected disabled>選項...</option>
              <option>5%</option>
              <option>10%</option>
            </select>
          </div>
        </div>

        <div class="datePicker" v-if="typeOfPayment === 'vendorPayment'">
          <div class="form-group">
            <label class="text-danger">*付款期限</label>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="far fa-calendar-alt"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control float-right"
                id="reservation"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label class="text-danger">*款項說明</label>
        <input
          type="text"
          class="form-control"
          placeholder="eg. 四月份零食費用"
          v-model="paymentDescription"
        />
      </div>
      <div class="col-3 mb-2">
        <label class="text-danger">*實際金額</label>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="填寫實際需收到之額度"
            v-model="payableAmount"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <div class="form-group">
          <label for="exampleInputFile"
            >上傳單據<span class="badge bg-secondary ml-2"
              >(僅收圖片檔/PDF)</span
            ></label
          >
          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="exampleInputFile"
              />
              <label class="custom-file-label" for="exampleInputFile"
                >選擇檔案</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-9">
        <!-- textarea -->
        <div class="form-group">
          <label>申請者備註欄</label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="如無單據，請填寫原因"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="row float-right">
      <div class="col">
        <button type="button" class="btn btn-block btn-default" disabled>
          上一步
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-block btn-default" @click="checkForm">下一步</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  name: "form-main-content",
  data() {
    return {
      paymentDescription: '',
      payableAmount:'',
      paymentOptions:'',
      typeOfPayment:'',
      wayToPay:'',
    }
  },
  methods: {
    checkForm(e){
      if (!this.paymentDescription || !this.payableAmount || !this.paymentOptions || !this.typeOfPayment) {
        alert('表單未完成')
        e.preventDefault()
        return false
      }

      switch (this.typeOfPayment) {
        case 'allowance':
        case 'reimbursement':
          this.$router.push('/content-form/form-emp-or-reimbursement')
          break

        case 'vendorPayment':
          if (this.wayToPay === 'companyCard') {
            this.$router.push('/content-form/form-vendor-company-card')
          } else {
            this.$router.push('/content-form/form-account-info')
          }
          break

        case 'salary':
          this.$router.push('/content-form/form-account-info')
          break

        default:
          break
      }
    }
    
    
  },
};
</script>