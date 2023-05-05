
<template>
	<div class="resume-page">
		<h2 class="ml-2">Resume</h2>

		<div class="flex flex-wrap">
			<button @click="print" class="border border-black text-black bg-white rounded px-2 py-1 mr-2">Print</button>
			<div>Choose "Save as PDF" from print dialog to download</div>
		</div>

		<div id="print-container" class="border border-black rounded p-4 bg-white text-black my-2">
			<h2>Jeff Rossi</h2>
			<hr class="border-2 border-black mb-4" />

			<h3>Employment</h3>
			<hr class="border-2 border-black mb-4" />

			<div v-for="job of jobs" :key="job.Id">
				<div>
					<strong>{{ job.Company }}</strong>
				</div>
				<table v-if="job.From && job.To">
					<tr>
						<td width="60px">
							<strong>From</strong>
						</td>
						<td width="140px">
							{{ job.From.Month }} {{ job.From.Year }}
						</td>
						<td width="60px">
							<strong>To</strong>
						</td>
						<td width="140px">
							{{ job.To.Month }} {{ job.To.Year }}
						</td>
					</tr>
				</table>
				<div v-if="job.Address">
					<strong>Address</strong>
					{{ FormatAddress(job.Address) }}
				</div>
				<div v-if="job.Title">
					<strong>Title</strong>
					{{ job.Title }}
				</div>
				<div v-if="job.Duties">
					<strong>Duties</strong>
					{{ job.Duties }}
				</div>
				<br />
			</div>


			<h3>Education</h3>
			<hr class="border-2 border-black mb-4" />

			<div v-for="school of schools" :key="school.Id">
				<div>
					<strong>{{ school.Name }}</strong>
				</div>
				<table v-if="school.From && school.To">
					<tr>
						<td width="60px">
							<strong>From</strong>
						</td>
						<td width="140px">
							{{ school.From.Month }} {{ school.From.Year }}
						</td>
						<td width="60px">
							<strong>To</strong>
						</td>
						<td width="140px">
							{{ school.To.Month }} {{ school.To.Year }}
						</td>
					</tr>
				</table>
				<div v-if="school.Address">
					<strong>Address</strong>
					{{ FormatAddress(school.Address) }}
				</div>
				<div v-if="school.Degree">
					<strong>Degree</strong>
					{{ school.Degree }}
				</div>
				<div v-if="school.Program">
					<strong>Program</strong>
					{{ school.Program }}
				</div>
				<br />
			</div>

			<h3>References</h3>
			<hr class="border-2 border-black mb-4" />

			<div v-for="reference of references" :key="reference.Id">
				<div v-if="reference.Name">
					<strong>{{ FormatName(reference.Name) }}</strong>
				</div>
				<div v-if="reference.Company">
					<strong>Company</strong>
					{{ reference.Company }}
				</div>
				<div v-if="reference.Title">
					<strong>Title</strong>
					{{ reference.Title }}
				</div>
				<div v-if="reference.Phones && reference.Phones.length > 0">
					<strong>Phone</strong>
					{{ reference.Phones.map((p) => p.Number).join(', ') }}
				</div>
				<div v-if="reference.Emails && reference.Emails.length > 0">
					<strong>Email</strong>
					{{ reference.Emails.map((e) => e.Address).join(', ') }}
				</div>
				<br />
			</div>


			<h3>Online</h3>
			<hr class="border-2 border-black mb-4" />

			<div>
				<strong>React:</strong> https://resume-react.jeff-rossi.com/
			</div>
			<div>
				<strong>Vue:</strong> https://resume-vue.jeff-rossi.com/
			</div>
			<div>
				<strong>Angular:</strong> https://resume-angular.jeff-rossi.com/
			</div>
			<div>
				<strong>Svelte:</strong> https://resume-svelte.jeff-rossi.com/
			</div>
			<br />


			<h3>Contact</h3>
			<hr class="border-2 border-black mb-4" />

			<div>
				<strong>Address:</strong> 1506 Tuscaloosa Ave, Holly Hill Florida
				32117
			</div>
			<div>
				<strong>Home:</strong> (386) 226-8913
			</div>
			<div>
				<strong>Cell:</strong> (386) 316-8485
			</div>
			<div>
				<strong>Email:</strong> inquiries@jeff-rossi.com
			</div>
			<br />

		</div>
	</div>
</template>

<script lang="ts" setup>
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
import { Job } from '../../types/job.type';
import { Reference } from '../../types/reference.type';
import { School } from '../../types/school.type';

const getSchools = async () => {
	const { data: schoolData } = await useAsyncQuery<{ getSchools: School[] }>(
		GET_SCHOOLS_QUERY
	)
	const schools: School[] = schoolData.value ? schoolData.value.getSchools : []
	return schools
}

const getJobs = async () => {
	const { data: jobData } = await useAsyncQuery<{ getJobs: Job[] }>(GET_JOBS_QUERY)
	const jobs: Job[] = jobData.value ? jobData.value.getJobs : []
	return jobs
}

const getReferences = async () => {
	const { data: referenceData } = await useAsyncQuery<{ getReferences: Reference[] }>(
		GET_REFERENCES_QUERY
	)
	const references: Reference[] = referenceData.value ? referenceData.value.getReferences : []
	return references
}

const schoolReq = getSchools()
const jobReq = getJobs()
const refReq = getReferences()

const [schools, jobs, references] = await Promise.all([schoolReq, jobReq, refReq])

const print = () => {
	const container = document.getElementById('print-container')
	if (container) {
		const styles = document.styleSheets
		const content = container.innerHTML
		const printWindow = window.open('', '', 'height=500, width=500')
		if (printWindow) {
			printWindow.document.write('<html>')
			if (styles) {
				printWindow.document.write('<head>')
				printWindow.document.write(
					`<link rel='stylesheet' href='${styles[0].href}' />`
				)
				printWindow.document.write('</head>')
			}
			printWindow.document.write('<body style="padding: 1em">')
			printWindow.document.write(content)
			printWindow.document.write('</body>')
			printWindow.document.write('</html>')
			printWindow.document.close()
			printWindow.print()
		}
	}
}

</script>